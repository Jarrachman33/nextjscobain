import Link from "next/link"
import { 
    Breadcrumb, 
    BreadcrumbItem,
    Button,
    Table  
} from "reactstrap"

export default function TableTest() {

        return(
          <div className="container">
        {/* <h1>Hello World</h1>
        <h2>yamet kudasi</h2>
        <Link href="/contacts">
            <p>Go to Game</p>
        </Link> */}
        <Breadcrumb style={{backgroundColor: "#54B435", padding:"10px"}}>
            <BreadcrumbItem active>HOME</BreadcrumbItem>
        </Breadcrumb>

        <div style={{marginTop: "60px", marginBottom:"40px"}}>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
            </Table>
                </div>
                <Link href="/" style={{marginRight: "20px"}}>
                    <Button color="warning">Back Page</Button>
                </Link> 

                <Link href="/contact">
                    <Button color="info">Next Page</Button>
                </Link> 
    </div>   
        )
}