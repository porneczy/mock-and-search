import { createServer } from "miragejs";


function mockServer() {
    let server = createServer(
        {
            routes(){
                this.urlPrefix = "https://www.asd.com"
                this.namespace = "/v1/api"
                this.timing = 5000

                this.get("/books", () => {
                    return [
                        {
                            title: "könycim 1",
                            author: "Feri",
                            year: 2000
                        },
                        {
                            title: "könyv cim213",
                            author: "Nem Feri",
                            year: 2001
                        },
                        {
                            title: "ciasdsadm",
                            author: "Ez is Feri",
                            year: 2021
                        }
                    ]
                })
            }
        }
    )

    return server
}

export default mockServer