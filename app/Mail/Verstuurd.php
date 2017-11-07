<?php

namespace App\Mail;
use App\Kenteken;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class Verstuurd extends Mailable
{
    use Queueable, SerializesModels;
    public $kenteken;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Kenteken $kenteken)
    {
        $this->kenteken = $kenteken;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {

        return $this->markdown('emails.verstuurd');
    }
}
