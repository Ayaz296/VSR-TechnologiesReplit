<?php
/**
 * Plugin Name: VSR Headless Content
 * Description: Provides editable JSON content for the VSR Technologies headless frontend.
 * Version: 1.0.0
 * Author: VSR Technologies
 */

if (!defined('ABSPATH')) {
    exit;
}

const VSR_HEADLESS_OPTION = 'vsr_headless_site_content';

function vsr_headless_default_content() {
    $seed_path = plugin_dir_path(__FILE__) . 'site-content-seed.json';

    if (file_exists($seed_path)) {
        $seed = json_decode(file_get_contents($seed_path), true);

        if (json_last_error() === JSON_ERROR_NONE && is_array($seed)) {
            return $seed;
        }
    }

    return [];
}

function vsr_headless_get_content() {
    $stored = get_option(VSR_HEADLESS_OPTION, []);
    return wp_parse_args(is_array($stored) ? $stored : [], vsr_headless_default_content());
}

add_action('rest_api_init', function () {
    register_rest_route('vsr/v1', '/site-content', [
        'methods' => 'GET',
        'callback' => function () {
            return rest_ensure_response([
                'content' => vsr_headless_get_content(),
                'updatedAt' => get_option(VSR_HEADLESS_OPTION . '_updated_at', ''),
            ]);
        },
        'permission_callback' => '__return_true',
    ]);
});

add_action('admin_menu', function () {
    add_menu_page(
        'VSR Headless Content',
        'VSR Content',
        'manage_options',
        'vsr-headless-content',
        'vsr_headless_render_admin',
        'dashicons-media-code',
        58
    );
});

function vsr_headless_render_admin() {
    if (!current_user_can('manage_options')) {
        return;
    }

    $message = '';
    $content = vsr_headless_get_content();

    if ($_SERVER['REQUEST_METHOD'] === 'POST' && check_admin_referer('vsr_headless_save_content')) {
        $raw = isset($_POST['vsr_headless_json']) ? wp_unslash($_POST['vsr_headless_json']) : '';
        $decoded = json_decode($raw, true);

        if (json_last_error() === JSON_ERROR_NONE && is_array($decoded)) {
            update_option(VSR_HEADLESS_OPTION, $decoded, false);
            update_option(VSR_HEADLESS_OPTION . '_updated_at', gmdate('c'), false);
            $content = $decoded;
            $message = '<div class="notice notice-success"><p>Content saved.</p></div>';
        } else {
            $message = '<div class="notice notice-error"><p>Invalid JSON. Nothing was saved.</p></div>';
        }
    }

    echo '<div class="wrap">';
    echo '<h1>VSR Headless Content</h1>';
    echo $message;
    echo '<p>Edit the JSON below. The React frontend reads it from <code>/wp-json/vsr/v1/site-content</code>.</p>';
    echo '<form method="post">';
    wp_nonce_field('vsr_headless_save_content');
    echo '<textarea name="vsr_headless_json" style="width:100%;min-height:620px;font-family:monospace;">' . esc_textarea(wp_json_encode($content, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES)) . '</textarea>';
    echo '<p><button type="submit" class="button button-primary">Save Content</button></p>';
    echo '</form>';
    echo '</div>';
}

add_action('rest_pre_serve_request', function ($served, $result, $request) {
    if (strpos($request->get_route(), '/vsr/v1/site-content') === 0) {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type, Authorization');
    }

    return $served;
}, 10, 3);