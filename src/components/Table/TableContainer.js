import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import debounce from 'lodash/debounce';
import { loadCompanies } from '../../actionCreators';
import Table from './Table';
import './Table.css';

class TableContainer extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    filteredCompanies: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadCompanies());
  }

  handleSearchDebounced = debounce(search => {
    const { dispatch } = this.props;

    dispatch({
      type: 'SEARCH',
      search,
    });
  }, 100);

  render() {
    const { filteredCompanies } = this.props;

    return (
      <Table
        companies={filteredCompanies}
        onSearch={this.handleSearchDebounced}
      />
    );
  }
}

const getCompanies = state => state.companies;
const getMembers = state => state.members;
const getRelationships = state => state.relationships;
const getSearch = state => state.search;

const buildCompanies = (companies, members, relationships) => {
  return Object.keys(relationships).map(relId => {
    const rel = relationships[relId];
    const companyId = rel.relationships.partner.data.id;
    const company = companies[companyId];
    const memberId = company.relationships.members.data[0].id;
    const member = members[memberId];
    return {
      id: company.id,
      name: company.attributes.name,
      email: member.attributes.email,
      firstName: member.attributes.firstName,
      lastName: member.attributes.lastName,
      created: rel.attributes.created,
      type: rel.attributes.typeRelationship,
      isRegistered: !company.attributes.pendingInvite,
    };
  });
};

const filterCompanies = (companies, search) => {
  const lcaseSearch = search.toLowerCase();
  return companies.filter(company => {
    const representative = `${company.firstName} ${company.lastName}`;
    return (
      company.name.toLowerCase().includes(lcaseSearch) ||
      company.email.toLowerCase().includes(lcaseSearch) ||
      representative.toLowerCase().includes(lcaseSearch) ||
      company.created.toLowerCase().includes(lcaseSearch)
    );
  });
};

const tableSelector = createSelector(
  [getCompanies, getMembers, getRelationships, getSearch],
  (companies, members, relationships, search) => ({
    filteredCompanies:
      filterCompanies(
        buildCompanies(companies, members, relationships),
        search,
      ) || [],
  }),
);

export default connect(tableSelector)(TableContainer);
