Pod::Spec.new do |spec|
  spec.name         = "NatDSIcons"
  spec.version      = "#{ ENV['NATDS_ICONS_VERSION'] }"
  spec.summary      = "Natura Group Design System - Icons"
  spec.description  = <<-DESC
                    Natura Design System helps designers and developers work faster and smarter, ensuring brand consistency and scalability.
                   DESC
  spec.documentation_url: "https://natds-ios.natura.design/documentation/how-to-use-icons.html"
  spec.homepage     = "https://www.natura.com.br/"
  spec.license      = "ISC"
  spec.author             = { "Natura Design System" => "designsystem@natura.net" }
  spec.source       = { :git => "https://github.com/natura-cosmeticos/natds-commons.git", :tag => "#{ ENV['NATDS_ICONS_TAG'] }" }

  spec.exclude_files = "Classes/Exclude"

  spec.swift_version = '5.0'
  spec.platform      = :ios, '10.0'

  spec.source_files  = '**/NatDSIcons/*.{swift,h,m}'
  spec.resources           = ['**/Resources/*.{ttf}']
  spec.ios.resource_bundle = { 'NatDSIcons' => ['**/Resources/*.{ttf}'] }
end
