import React from 'react';
import { Header, Segment, Table, Input } from 'semantic-ui-react';
import Row from './Row';
import './Table.css';

export default class FilterableTable extends React.Component {
  render() {
    const { companies, onSearch } = this.props;
    const companyCount = companies.length;

    return (
      <div>
        <Segment attached="top" className="attached-header">
          {companyCount > 0 ? (
            <Header.Subheader>
              Showing 1-
              {companyCount} of {companyCount}
            </Header.Subheader>
          ) : (
            <span />
          )}
          <Input
            icon="search"
            iconPosition="left"
            placeholder="Search"
            onChange={e => onSearch(e.target.value)}
          />
        </Segment>
        <Table celled attached>
          <Table.Header className="header">
            <Table.Row>
              <Table.HeaderCell>Company Name</Table.HeaderCell>
              <Table.HeaderCell>Representative</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Date Invited</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {companies.map(company => {
              return <Row key={company.id} company={company} />;
            })}
          </Table.Body>
        </Table>
      </div>
    );
  }
}
