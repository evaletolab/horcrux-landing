<?php

class ApiError
{
    static public function generateError(string $message): array
    {
        return [
            "message" => $message,
        ];
    }
}