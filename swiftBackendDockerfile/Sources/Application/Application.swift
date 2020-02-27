import Kitura

public class App {

    let router = Router()

    public init() throws {

    }

    func postInit() throws {
        initializeCodableRoutes(app: self)
        router.all("/", middleware: StaticFileServer())
    }

    public func run() throws {
        try postInit()
        Kitura.addHTTPServer(onPort: 80, with: router)
        Kitura.run()
    }
}
