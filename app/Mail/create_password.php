<?php

namespace App\Mail;
use App\User;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class create_password extends Mailable
{
    use Queueable, SerializesModels;
    public $gegevens;

    /**
     * Create a new message instance.
     *
     * @return void
     */
     public function __construct(User $user)
     {
         $this->gegevens = $user;
     }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('emails.create_password');
    }
}
