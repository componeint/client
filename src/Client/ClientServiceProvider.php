<?php
/**
 * ClientServiceProvider.php
 * Created by anonymous on 09/12/15 13:12.
 */

namespace Onderdelen\Client;

use ReflectionClass;
use Illuminate\Foundation\AliasLoader;
use Illuminate\Support\ServiceProvider;

class ClientServiceProvider extends ServiceProvider
{

    /**
     * Indicates if loading of the provider is deferred.
     *
     * @var bool
     */
    protected $defer = false;

    /**
     * Bootstrap the application events.
     *
     * @return void
     */
    public function boot()
    {

    }

    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        $this->app->register(\Onderdelen\AppFoundation\AppFoundationServiceProvider::class);
        $this->app->register(\Onderdelen\Dashboard\DashboardServiceProvider::class);
        $this->app->register(\Onderdelen\Posts\PostsServiceProvider::class);
    }

    /**
     * Get the services provided by the provider.
     *
     * @return array
     */
    public function provides()
    {
        return [];
    }

}
