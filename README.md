### MailGun Event Explorer

Beta MailGun API Event Log Reader

For those situations when you have API access to MailGun but not access to the MailGun Console you can use this to walk the log history of `Rejected` and `Failed` events.
There are two reasons for this project:
- Mailgun pagination sucks for usability
- Who wants to read JSON when you could use `CTRL-F`

#### Project Dependencies
* Phalcon 3.2 - https://github.com/phalcon/cphalcon
  * Phalcon Devtools(for serve command) - https://github.com/phalcon/phalcon-devtools
* Node 6.3+
* Webpack 3.5+

#### Setup
1. Fork/Clone
2. $`cp .env.sample .env`
3. Set your Mailgun api in .env
4. npn/yarn install
5. $`webpack`
6. $`phalcon serve`
7. $`open http://localhost:8000`

#### About
This project is in preparation for a series of tutorial videos combining Webpack and Phalcon for building application with rich clients.
