<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class EducationApiTest extends TestCase
{
    public function test_education_api_returns_education(): void
    {
        $response = $this->get('/api/education');

        $response->assertStatus(200)
                ->assertJsonStructure([
                    '*' => [
                        'id',
                        'institution',
                        'degree',
                        'period',
                        'description'
                    ]
                ]);
    }

    public function test_education_api_returns_valid_data(): void
    {
        $response = $this->get('/api/education');

        $response->assertStatus(200);
        
        $education = $response->json();
        
        $this->assertIsArray($education);
        
        if (!empty($education)) {
            $edu = $education[0];
            $this->assertArrayHasKey('id', $edu);
            $this->assertArrayHasKey('institution', $edu);
            $this->assertArrayHasKey('degree', $edu);
            $this->assertArrayHasKey('period', $edu);
            $this->assertArrayHasKey('description', $edu);
            
            $this->assertIsInt($edu['id']);
            $this->assertIsString($edu['institution']);
            $this->assertIsString($edu['degree']);
            $this->assertIsString($edu['period']);
            $this->assertIsString($edu['description']);
        }
    }

    public function test_education_api_handles_cors(): void
    {
        $response = $this->get('/api/education');

        $response->assertHeader('Access-Control-Allow-Origin', '*');
    }
}
