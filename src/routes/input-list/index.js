/**
 * Responsive
 */
import React from 'react';
import { Table, Input } from 'reactstrap';

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// rct card box
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

const dataList = [
  'Tax refund',
  'Flight diver',
  'Crew salary',
  'Rent',
  'Entertain',
  'Insurance',
  'Tax',
  'Utility',
  'BSP/CASS',
  'Lawyer/Accountant',
  'System Maintenance',
  'Repair',
  'Repair-car',
  'Repair-device',
  'Repair-house',
  'Travel',
  'Telecomunication',
  'Office Supplies',
  'Transpotation',
  'Energy',
  'Other',
  'Low cost',
  'Service Outsourcing'
];

const ResponsiveTable = ({ match }) => (
	<div className="responsive-table-wrapper">
		{/* <PageTitleBar title={<IntlMessages id="sidebar.responsive" />} match={match} /> */}
		<RctCollapsibleCard>
			<div className="table-responsive">
				<div className="unseen">
					<Table hover bordered striped>
						<thead>
							<tr className="bg-primary text-white">
								<th>Items</th>
								<th>Amount</th>
								<th>Day1</th>
								<th>Day2</th>
								<th>Day3</th>
							</tr>
						</thead>
						<tbody>
            {dataList.map(item => {
                return (
                  <tr>
                    <td>{item}</td>
                    <td><Input type="number" /></td>
                    <td><Input type="number" /></td>
                    <td><Input type="number" /></td>
                    <td><Input type="number" /></td>
                  </tr>
                );
              })}							
						</tbody>
					</Table>
				</div>
			</div>
		</RctCollapsibleCard>
	</div>
);

export default ResponsiveTable;
