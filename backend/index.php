<?php

use Dotenv\Dotenv;
use Slim\Http\Request;
use Slim\Http\Response;
use Monolog\Logger;
use Monolog\Handler\StreamHandler;

require_once('vendor/autoload.php');

$app = new \Slim\App;

// inject dependencies
$container = $app->getContainer();

$logger = new \Monolog\Logger('my_logger');
$file_handler = new \Monolog\Handler\StreamHandler('./logs/app.log');
$logger->pushHandler($file_handler);

$container['logger'] = function($c) {
    global $logger;
    return $logger;
};

/**
 * cors settings
 */
$app->add(function (Request $req, Response $res, $next) {
    $response = $next($req, $res);
    
    return $response
            ->withHeader('Access-Control-Allow-Origin', "*")
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
});


/////////////////////////
// routes
$app->post('/request-subscription', function(Request $request, Response $response, array $args){
    $body = json_decode($request->getBody(), true);
    
    if ($body === null && json_last_error() !== JSON_ERROR_NONE) {
        return $response->withStatus(400)->withJson(ApiError::generateError("received invalid json"));
    }

    //////
    // body validation

    $validator = new SubscriptionRequestValidator($body);
    $validationResult = $validator->validate();

    if (!$validationResult->isValid()) {
        return $response->withStatus(400)->withJson(ApiError::generateError($validationResult->getErrorMessage()));
    }

    try{
        SubscriptionService::persistSubscription($body);
    }catch (DbException $e){
        return $response->withStatus(400)->withJson(ApiError::generateError($e->getMessage()));
    }

    return $response->withJson(["message" => "ok"]);
});

/**
 * debug purpose only
 */
$app->get('/debug/generate-error/{code}/{message}', function (Request $request, Response $reponse, array $args){
    $code = (int) $args['code'];
    $message = $args['message'];
    return $reponse->withStatus($code)->withJson(ApiError::generateError($message));
}); 


// // Catch-all route to serve a 404 Not Found page if none of the routes match
// // NOTE: make sure this route is defined last
// $app->map(['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], '/{routes:.+}', function($req, $res) {
//     $handler = $this->notFoundHandler; // handle using the default Slim page not found handler
//     return $handler($req, $res);
// });


$app->run();