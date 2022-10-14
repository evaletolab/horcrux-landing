<?php

class DbException extends Exception { }

class SubscriptionService
{
    public static function persistSubscription(array $body):void {
        try {
            // connect to your database
            $db = new SQLite3('./data/db.sqlite');
            $db->busyTimeout(5000);
            // WAL mode has better control over concurrency.
            // Source: https://www.sqlite.org/wal.html
            $db->exec('PRAGMA journal_mode = wal;');
        }
        catch (Exception $exception) {
            // sqlite3 throws an exception when it is unable to connect
            throw new DbException("unable to connect to sqlite file");
        }
    
        // $timestamp = date("Y-m-d H:i:s");
        $email = $body['email'];
    
        $statement = $db->prepare("INSERT INTO subscriptions (email) VALUES (:email)");
        if(!$statement){
            throw new DbException("unable to prepare statement: " . $db->lastErrorMsg());
        }

        $statement->bindValue(':email', $email);
        
        $res = $statement->execute();
    
        if(!$res){
            throw new DbException("failure to execute: " . $db->lastErrorMsg());
        }
        
        // free the memory, this in NOT done automatically, while your script is running
        $res->finalize();
        $db->close();
    
    
        // send email
    
        // $emailSubject =  "Inscription à la newsletter de horcrux";
        // $emailContent = "Merci pour l’intérêt que vous portez à Permacriture. Désormais vous recevrez notre lettre d’information. Celle-ci nous permettra de vous tenir au courant de l’avancement du projet.";
    
        // mail($email, $emailSubject, $emailContent);
    
    }
}