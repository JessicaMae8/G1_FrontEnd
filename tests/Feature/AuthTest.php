<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\User;

class AuthTest extends TestCase
{
    use RefreshDatabase;

    public function test_user_can_login_with_correct_credentials()
    {
        $user = User::factory()->create([
            'password' => bcrypt('password123'),
        ]);

        $response = $this->postJson('/api/auth/login', [
            'email' => $user->email,
            'password' => 'password123',
        ]);

        $response->assertStatus(200)
                 ->assertJson(['message' => 'Logged in successfully']);
        $this->assertAuthenticatedAs($user);
    }

    public function test_user_cannot_login_with_incorrect_credentials()
    {
        $user = User::factory()->create([
            'password' => bcrypt('password123'),
        ]);

        $response = $this->postJson('/api/auth/login', [
            'email' => $user->email,
            'password' => 'wrongpassword',
        ]);

        $response->assertStatus(401)
                 ->assertJson(['message' => 'Invalid credentials']);
        $this->assertGuest();
    }

    public function test_authenticated_user_can_logout()
    {
        $user = User::factory()->create();

        $this->actingAs($user);

        $response = $this->postJson('/api/auth/logout');

        $response->assertStatus(200)
                 ->assertJson(['message' => 'Logged out successfully']);
        $this->assertGuest();
    }

    public function test_authenticated_user_can_get_user_info()
    {
        $user = User::factory()->create();

        $this->actingAs($user);

        $response = $this->getJson('/api/auth/user');

        $response->assertStatus(200)
                 ->assertJson([
                     'id' => $user->id,
                     'email' => $user->email,
                 ]);
    }
}
