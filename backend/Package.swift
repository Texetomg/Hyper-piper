// swift-tools-version:5.1
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "Hypertube",
    dependencies: [
        // Dependencies declare other packages that this package depends on.
        // .package(url: /* package url */, from: "1.0.0"),
        .package(url: "https://github.com/IBM-Swift/Kitura", from: "2.9.1"),
        .package(url: "https://github.com/IBM-Swift/HeliumLogger.git", from: "1.9.0")
    ],
    targets: [
        // Targets are the basic building blocks of a package. A target can define a module or a test suite.
        // Targets can depend on other targets in this package, and on products in packages which this package depends on.
        .target(
            name: "Hypertube",
            dependencies: [.target(name: "Application"), "Kitura"]
        ),
        .target(
            name: "Application",
            dependencies: ["Kitura", "HeliumLogger"]
        ),
        .testTarget(name: "ApplicationTests",
                    dependencies: [.target(name: "Application"), "Kitura"]
        )
    ]
)