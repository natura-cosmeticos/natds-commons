final class DynamicColors {
    private let dynamicColorFactory: ColorProvider

    init(dynamicColorFactory: ColorProvider) { self.dynamicColorFactory = dynamicColorFactory }
    
    lazy var primary = dynamicColorFactory.createDynamicColor(for: \.primary)
}