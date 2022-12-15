// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import Link from "next/Link"
import {
  Breadcrumb,
  BreadcrumbItem,
  Button
} from "reactstrap"


export default function ContactPage() {
    
    return(
        <div className="container">
        <Breadcrumb style={{backgroundColor: "#FF7000", padding:"20px"}}>
            <BreadcrumbItem>
                INFORMATION
            </BreadcrumbItem>
             </Breadcrumb>

        <div style={{marginTop: "70px", marginBottom:"45px"}}>
            <h2>This is contact page</h2>
        </div>

        <Link href="/table" style={{marginRight: "20px"}}>
            <Button color="info">Back Page</Button>
        </Link>

        <Link href="/">
                    <Button color="info">Next Page</Button>
        </Link> 
                
    </div>    
    )
}