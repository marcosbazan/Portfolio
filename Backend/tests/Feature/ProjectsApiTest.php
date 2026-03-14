<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ProjectsApiTest extends TestCase
{
    public function test_projects_api_returns_projects(): void
    {
        $response = $this->get('/api/projects');

        $response->assertStatus(200)
                ->assertJsonStructure([
                    '*' => [
                        'key',
                        'link',
                        'img',
                        'techs'
                    ]
                ]);
    }

    public function test_projects_api_returns_valid_data(): void
    {
        $response = $this->get('/api/projects');

        $response->assertStatus(200);
        
        $projects = $response->json();
        
        $this->assertIsArray($projects);
        
        if (!empty($projects)) {
            $project = $projects[0];
            $this->assertArrayHasKey('key', $project);
            $this->assertArrayHasKey('link', $project);
            $this->assertArrayHasKey('img', $project);
            $this->assertArrayHasKey('techs', $project);
            $this->assertIsArray($project['techs']);
        }
    }

    public function test_projects_api_handles_cors(): void
    {
        $response = $this->get('/api/projects');

        $response->assertHeader('Access-Control-Allow-Origin', '*');
    }
}
