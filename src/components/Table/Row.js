import React from 'react';
import { Table } from 'semantic-ui-react';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import capitalize from 'lodash/capitalize';
import Tag from '../Tag';
import './Table.css';

export default class TableRow extends React.Component {
  render() {
    const { company } = this.props;

    return (
      <Table.Row>
        <Table.Cell style={{ fontWeight: 'bold', color: '#729af6' }}>
          {company.name}
          <span style={{ float: 'right' }}>
            <Tag
              style={{
                backgroundColor: '#e1e6f5',
                color: '#97a4c6',
              }}
            >
              {capitalize(company.type)}
            </Tag>
            {!company.isRegistered && (
              <Tag
                style={{
                  backgroundColor: '#fff2d3',
                  color: '#d5a83e',
                }}
              >
                Unregistered
              </Tag>
            )}
          </span>
        </Table.Cell>
        <Table.Cell>{`${company.firstName} ${company.lastName}`}</Table.Cell>
        <Table.Cell>
          <a href="/">{company.email}</a>
        </Table.Cell>
        <Table.Cell>
          {distanceInWordsToNow(company.created, { addSuffix: true })}
        </Table.Cell>
      </Table.Row>
    );
  }
}
