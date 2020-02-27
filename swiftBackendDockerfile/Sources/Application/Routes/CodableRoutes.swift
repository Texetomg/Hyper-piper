import KituraContracts

func initializeCodableRoutes(app: App) {
    app.router.post("/codable", handler: app.postHandler)
    app.router.get("/codable", handler: app.getAllHandler)
    app.router.get("/codable", handler: app.getOneHandler)
}
extension App {
    static var codableStore = [Book]()
    
    func postHandler(book: Book, completion: (Book?, RequestError?) -> Void) {
        App.codableStore.append(book)
        completion(book, nil)
    }
    
    func getAllHandler(completion: ([Book]?, RequestError?) -> Void) {
        completion(App.codableStore, nil)
    }
    
    func getOneHandler(id: Int, completion: (Book?, RequestError?) -> Void) {
        guard id < App.codableStore.count, id >= 0 else {
            return completion(nil, .notFound)
        }
        completion(App.codableStore[id], nil)
    }
}
