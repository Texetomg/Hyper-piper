import KituraContracts

func initializeCodableRoutes(app: App) {
    app.router.get("/api/customers", handler: app.getAllCustomers)
}
extension App {
    func getAllCustomers(completion: ([Customers]?, RequestError?) -> Void) {
        let customers: [Customers] = [
            Customers(id: 1, firstName: "John", lastName: "Doe"),
            Customers(id: 2, firstName: "Steve", lastName: "Smith"),
            Customers(id: 3, firstName: "Mary", lastName: "Swanson")
        ]
        completion(customers, nil)
    }
}
