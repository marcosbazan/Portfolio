<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExperienceApiTest extends TestCase
{
    public function test_experience_api_returns_experience(): void
    {
        $response = $this->get('/api/experience');

        $response->assertStatus(200)
                ->assertJsonStructure([
                    '*' => [
                        'id',
                        'company',
                        'position',
                        'period',
                        'description',
                        'technologies'
                    ]
                ]);
    }

    public function test_experience_api_returns_valid_data(): void
    {
        $response = $this->get('/api/experience');

        $response->assertStatus(200);
        
        $experiences = $response->json();
        
        $this->assertIsArray($experiences);
        
        if (!empty($experiences)) {
            $experience = $experiences[0];
            $this->assertArrayHasKey('id', $experience);
            $this->assertArrayHasKey('company', $experience);
            $this->assertArrayHasKey('position', $experience);
            $this->assertArrayHasKey('period', $experience);
            $this->assertArrayHasKey('description', $experience);
            $this->assertArrayHasKey('technologies', $experience);
            
            $this->assertIsInt($experience['id']);
            $this->assertIsString($experience['company']);
            $this->assertIsString($experience['position']);
            $this->assertIsString($experience['period']);
            $this->assertIsArray($experience['description']);
            $this->assertIsArray($experience['technologies']);
        }
    }

    public function test_experience_api_handles_cors(): void
    {
        $response = $this->get('/api/experience');

        $response->assertHeader('Access-Control-Allow-Origin', '*');
    }
}
