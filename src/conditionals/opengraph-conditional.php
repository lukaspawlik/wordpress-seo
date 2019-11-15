<?php
/**
 * Yoast SEO plugin file.
 *
 * @package Yoast\YoastSEO\Conditionals
 */

namespace Yoast\WP\Free\Conditionals;

use Yoast\WP\Free\Helpers\Options_Helper;

/**
 * Conditional that is only met when the OpenGraph feature is enabled.
 */
class OpenGraph_Conditional implements Conditional {

	/**
	 * The options helper.
	 *
	 * @var Options_Helper
	 */
	private $options;

	/**
	 * OpenGraph_Conditional constructor.
	 *
	 * @param Options_Helper $options The options helper.
	 */
	public function __construct( Options_Helper $options ) {
		$this->options = $options;
	}

	/**
	 * @inheritdoc
	 */
	public function is_met() {
		return $this->options->get( 'opengraph' ) === true;
	}
}
