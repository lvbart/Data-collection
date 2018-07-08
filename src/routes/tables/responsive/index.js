/**
 * Responsive
 */
import React from 'react';
import { Table } from 'reactstrap';

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// rct card box
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

const ResponsiveTable = ({ match }) => (
	<div className="responsive-table-wrapper">
		{/* <PageTitleBar title={<IntlMessages id="sidebar.responsive" />} match={match} /> */}
		<RctCollapsibleCard>
			<div className="table-responsive">
				<div className="unseen">
					<Table hover bordered striped>
						<thead>
							<tr className="bg-primary text-white">
								<th>Codes</th>
								<th>Company</th>
								<th>Price</th>
								<th>Change</th>
								<th>Change %</th>
								<th>Open</th>
								<th>High</th>
								<th>Low</th>
								<th>Volume</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>AAC</td>
								<td>AUSTRALIAN AGRICULTURAL COMPANY LIMITED.</td>
								<td>$1.38</td>
								<td>-0.01</td>
								<td>-0.36%</td>
								<td>$1.39</td>
								<td>$1.39</td>
								<td>$1.38</td>
								<td>9,395</td>
							</tr>
							<tr>
								<td>AAD</td>
								<td>ARDENT LEISURE GROUP</td>
								<td>$1.15</td>
								<td> +0.02</td>
								<td>1.32%</td>
								<td>$1.14</td>
								<td>$1.15</td>
								<td>$1.13</td>
								<td>56,431</td>
							</tr>
							<tr>
								<td>AAX</td>
								<td>AUSENCO LIMITED</td>
								<td>$4.00</td>
								<td>-0.04</td>
								<td>-0.99%</td>
								<td>$4.01</td>
								<td>$4.05</td>
								<td>$4.00</td>
								<td>90,641</td>
							</tr>
							<tr>
								<td>ABC</td>
								<td>ADELAIDE BRIGHTON LIMITED</td>
								<td>$3.00</td>
								<td> +0.06</td>
								<td>2.04%</td>
								<td>$2.98</td>
								<td>$3.00</td>
								<td>$2.96</td>
								<td>862,518</td>
							</tr>
							<tr>
								<td>ABP</td>
								<td>ABACUS PROPERTY GROUP</td>
								<td>$1.91</td>
								<td>0.00</td>
								<td>0.00%</td>
								<td>$1.92</td>
								<td>$1.93</td>
								<td>$1.90</td>
								<td>595,701</td>
							</tr>
							<tr>
								<td>ABY</td>
								<td>ADITYA BIRLA MINERALS LIMITED</td>
								<td>$0.77</td>
								<td> +0.02</td>
								<td>2.00%</td>
								<td>$0.76</td>
								<td>$0.77</td>
								<td>$0.76</td>
								<td>54,567</td>
							</tr>
							<tr>
								<td>ACR</td>
								<td>ACRUX LIMITED</td>
								<td>$3.71</td>
								<td> +0.01</td>
								<td>0.14%</td>
								<td>$3.70</td>
								<td>$3.72</td>
								<td>$3.68</td>
								<td>191,373</td>
							</tr>
							<tr>
								<td>ADU</td>
								<td>ADAMUS RESOURCES LIMITED</td>
								<td>$0.72</td>
								<td>0.00</td>
								<td>0.00%</td>
								<td>$0.73</td>
								<td>$0.74</td>
								<td>$0.72</td>
								<td>8,602,291</td>
							</tr>
						</tbody>
					</Table>
				</div>
			</div>
		</RctCollapsibleCard>
	</div>
);

export default ResponsiveTable;
