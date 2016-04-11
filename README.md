# Close.io mobile application

- [Setup] (#setup)
- [Preview] (#preview)

## Setup

1. `npm install`
2. Copy `.env.development.example` into `.env.development` and add your
   API key from Close.io `CLOSE_API_KEY`
3. In `ios/App/AppDelegate.m` either change on line 21 the name of the Mac to
   match yours or change the name of your Mac to match `Macbook-Pro.local`. To
   accomplish this - go to `System Preferences -> Sharing -> Edit (Computer Name)`.
4. `open ios/App.xcodeproj`
5. `npm start`
6. In XCode choose iPhone Simulator and run `Cmd + R` to build the project.
7. Have fun!

## Preview

This is a proposal for Close.io mobile application. It's only a prototype but
does a good job of showing the idea.

### Splash Screen

![Splash Screen](https://raw.githubusercontent.com/dvalchanov/closeio-mobile/master/demo_images/splashscreen.png)

### Leads List Page

![Leads List](https://raw.githubusercontent.com/dvalchanov/closeio-mobile/master/demo_images/leads_list.png)

### Lead Details Page #1

![Lead Details](https://raw.githubusercontent.com/dvalchanov/closeio-mobile/master/demo_images/lead_details1.png)

### Lead Details Page #2

![Lead Details](https://raw.githubusercontent.com/dvalchanov/closeio-mobile/master/demo_images/lead_details2.png)

### New Lead Pop-up

![New Lead](https://raw.githubusercontent.com/dvalchanov/closeio-mobile/master/demo_images/new_lead.png)
