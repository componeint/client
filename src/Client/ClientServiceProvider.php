<?php
/**
 * ClientServiceProvider.php
 * Created by anonymous on 09/12/15 13:12.
 */

namespace Componeint\Client;

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
        $this->app->register(\Componeint\AppFoundation\AppFoundationServiceProvider::class);
        $this->app->register(\Componeint\Seneschal\SeneschalServiceProvider::class);
        $this->app->register(\Componeint\Dashboard\DashboardServiceProvider::class);
        $this->app->register(\Componeint\Posts\PostsServiceProvider::class);
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
