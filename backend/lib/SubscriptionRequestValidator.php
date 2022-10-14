<?php

class SubscriptionRequestValidationException extends Exception { }

class SubscriptionRequestValidator
{
    private ValidationResult $validationResult; 

    public function __construct(
        private array $body, 
    ) {
        $this->validationResult = new ValidationResult();
    }

    private function validateEmail() 
    {
        if(!array_key_exists('email', $this->body)){
            $this->validationResult->addError("missing email");
            throw new SubscriptionRequestValidationException();
        }

        $email = $this->body["email"];

        if(strlen($email) > 60) {
            $this->validationResult->addError("invalid email");
            throw new SubscriptionRequestValidationException();
        }

    }


    public function validate(): ValidationResult {
        try{
            $this->validateEmail();
        }catch(SubscriptionRequestValidationException $e){
            return $this->validationResult;
        }

        // all is ok
        return $this->validationResult;
    }   
}