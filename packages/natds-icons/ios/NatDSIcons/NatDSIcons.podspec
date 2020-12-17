Pod::Spec.new do |spec|
  spec.name         = "NatDSIcons"
  spec.version      = "0.0.5"
  spec.summary      = "Natura Group Design System - Icons"
  spec.description  = <<-DESC
                    Natura Design System helps designers and developers work faster and smarter, ensuring brand consistency and scalability.
                   DESC

  spec.homepage     = "https://www.natura.com.br/"
  spec.license      = "ISC"
  spec.author             = { "Natura Design System" => "designsystem@natura.net" }
  spec.source       = { :git => "https://github.com/natura-cosmeticos/natds-commons.git", :tag => spec.version, :branch => "feat/ios-icons" }

  spec.exclude_files = "Classes/Exclude"

  spec.swift_version = '5.0'
  spec.platform      = :ios, '10.0'

  #spec.source_files  = 'Resources/*.{swift,h,m}'

  #spec.resources           = ['Resources/*.{ttf}']
  #spec.ios.resource_bundle = { 'NatDSIcons' => ['Reources/*.{ttf}'] }
end
