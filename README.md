# close.io mobile application

- [Preview] (#preview)
- [Setup] (#setup)

## Preview

This is a proposal for Close.io mobile application. It's only a prototype but
does a good job of showing the idea.

![Splash Screen](https://raw.githubusercontent.com/dvalchanov/closeio-mobile/master/demo_images/splashscreen.png)
![Leads List](https://raw.githubusercontent.com/dvalchanov/closeio-mobile/master/demo_images/leads_list.png)
![Lead Details](https://raw.githubusercontent.com/dvalchanov/closeio-mobile/master/demo_images/lead_details1.png)
![Lead Details](https://raw.githubusercontent.com/dvalchanov/closeio-mobile/master/demo_images/lead_details2.png)
![New Lead](https://raw.githubusercontent.com/dvalchanov/closeio-mobile/master/demo_images/new_lead.png)

## Setup

1. `npm install`
2. Copy `.env.development.example` into `.env.development` and add your
   API key from Close.io `CLOSE_API_KEY`
3. `open ios/App.xcodeproj`
4. `npm start`
5. In XCode choose iPhone Simulator and run `Cmd + R` to build the project.
6. Have fun!
