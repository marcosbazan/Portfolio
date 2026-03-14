<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class SkillsApiTest extends TestCase
{
    public function test_skills_api_returns_skills(): void
    {
        $response = $this->get('/api/skills');

        $response->assertStatus(200)
                ->assertJsonStructure([
                    '*' => [
                        'category',
                        'icons'
                    ]
                ]);
    }

    public function test_skills_api_returns_valid_data(): void
    {
        $response = $this->get('/api/skills');

        $response->assertStatus(200);
        
        $skills = $response->json();
        
        $this->assertIsArray($skills);
        
        if (!empty($skills)) {
            $skill = $skills[0];
            $this->assertArrayHasKey('category', $skill);
            $this->assertArrayHasKey('icons', $skill);
            $this->assertIsArray($skill['icons']);
            $this->assertIsString($skill['category']);
        }
    }

    public function test_skills_api_handles_cors(): void
    {
        $response = $this->get('/api/skills');

        $response->assertHeader('Access-Control-Allow-Origin', '*');
    }
}
