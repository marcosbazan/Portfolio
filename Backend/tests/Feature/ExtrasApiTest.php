<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExtrasApiTest extends TestCase
{
    public function test_extras_api_returns_extras(): void
    {
        $response = $this->get('/api/extras');

        $response->assertStatus(200)
                ->assertJsonStructure([
                    'INTERESTS',
                    'LANGUAGES',
                    'EVENTS',
                    'EVENTS_LIST',
                    'RECOGNITIONS',
                    'CERTIFICATES',
                    'CERTIFICATES_LIST'
                ]);
    }

    public function test_extras_api_returns_valid_data(): void
    {
        $response = $this->get('/api/extras');

        $response->assertStatus(200);
        
        $extras = $response->json();
        
        $this->assertArrayHasKey('EVENTS_LIST', $extras);
        $this->assertArrayHasKey('CERTIFICATES_LIST', $extras);
        $this->assertIsArray($extras['EVENTS_LIST']);
        $this->assertIsArray($extras['CERTIFICATES_LIST']);
    }

    public function test_extras_api_handles_cors(): void
    {
        $response = $this->get('/api/extras');

        $response->assertHeader('Access-Control-Allow-Origin', '*');
    }
}
