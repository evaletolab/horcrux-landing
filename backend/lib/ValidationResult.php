<?php

class ValidationResult
{
    private bool $isValid = true;
    private string $errorMessage = "";

    public function addError(string $errorMessage){
        $this->isValid = false;
        $this->errorMessage = $errorMessage;
    }

    public function isValid(): bool{
        return $this->isValid;
    }

    public function getErrorMessage(): string{
        return $this->errorMessage;
    }
}