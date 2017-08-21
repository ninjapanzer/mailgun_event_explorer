<?php

use GuzzleHttp\Client;
use Carbon\Carbon;

class MailGunEventsController extends ControllerBase
{
    public function fetchAction() {
      $page = $this->request->get("page");
      $uri = "https://api.mailgun.net/v3/mg.varomoney.com/events";
      if(isset($page)) {
        $uri = $uri . "/$page";
      }
      $client = new Client();
      $key_parts = explode(":", getenv("MAILGUN_KEY"));
      $response = $client->get($uri, [
        'auth' => [
            $key_parts[0],
            $key_parts[1]
        ],
        'query'   => [
          'event' => 'rejected OR failed',
          'limit' => 300,
          'begin' => Carbon::now()->format('D, d M Y h:i:s T') //Thu, 17 Aug 2017 12:02:00 EST
        ]
      ]);

      $this->view->disable();
      $this->_isJsonResponse = true;
      $this->response->setContentType('application/json', 'UTF-8');
      echo $response->getBody();
    }
}
