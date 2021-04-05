import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <table>
            <tr>
                <td>
                    <Link to={'/teams'}>
                        Teams
                    </Link>
                </td>
                <td><a href='stafflist.php'>Staff</a></td>
                <td><a href='report.php'>Report</a></td>
                <td><a href='report_avg.php'>Report_Average</a></td>
                <td><a href='report_dash.php'>Dashboard</a></td>
                <td><a href='gauges_list_dashboard.php'>Dashboard settings</a></td>
                <td><a href='help.html'>Help</a></td>
            </tr>
        </table>
  );
}

  export default Navbar;