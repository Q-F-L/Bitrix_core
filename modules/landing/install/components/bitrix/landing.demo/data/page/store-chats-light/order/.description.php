<?php
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
{
	die();
}

use \Bitrix\Main\Localization\Loc;

return [
	'code' => 'store-chats-light/order',
	'name' => Loc::getMessage('LANDING_DEMO_STORE_CHATS_LIGHT-ORDER-NAME'),
	'description' => Loc::getMessage('LANDING_DEMO_STORE_CHATS_LIGHT-ORDER-DESC'),
	'type' => 'store',
	'version' => 3,
	'lock_delete' => true,
	'fields' => [
		'RULE' => NULL,
		'ADDITIONAL_FIELDS' => [
			'B24BUTTON_CODE' => 'N',
			'METAOG_TITLE' => Loc::getMessage('LANDING_DEMO_STORE_CHATS_LIGHT-ORDER-RICH_NAME'),
			'METAOG_DESCRIPTION' => Loc::getMessage('LANDING_DEMO_STORE_CHATS_LIGHT-ORDER-RICH_DESC'),
			'METAOG_IMAGE' => 'https://cdn.bitrix24.site/bitrix/images/demo/page/store-chats/order/preview.jpg',
			'VIEW_USE' => 'N',
			'VIEW_TYPE' => 'no',
			'THEME_CODE' => '3corporate',
		],
	],
	'layout' => [
		'code' => 'empty',
	],


	'items' => [
		'0' => [
			'code' => 'store.salescenter.order.details',
			'access' => 'W',
			'nodes' => [
				'bitrix:salescenter.order.details' => [
					'TEMPLATE_MODE' => 'lightmode',
					'SHOW_HEADER' => 'Y',
				]
			],
		],
		'1' => [
			'code' => '61.1.phone_w_btn_rght',
			'access' => 'X',
			'nodes' => [
				'bitrix:landing.blocks.crm_contacts' => [
					'BUTTON_POSITION' => 'right',
					'TEMPLATE_MODE' => 'lightmode',
					'TITLE' => Loc::getMessage('LANDING_DEMO_STORE_CHATS_LIGHT-ORDER-TEXT5'),
					'BUTTON_TITLE' => Loc::getMessage('LANDING_DEMO_STORE_CHATS_LIGHT-ORDER-TEXT3'),
				],
			],
			'style' => [
				'#wrapper' => [
					0 => 'landing-block g-pt-20 g-pb-20 g-bg-white u-block-border-none',
				],
			],
		],
		'2' => [
			'code' => '26.separator',
			'nodes' => [],
			'style' => [
				'#wrapper' => [
					0 => 'landing-block g-bg-transparent g-pt-15 g-pb-10',
				],
				'.landing-block-line' => [
					0 => 'landing-block-line g-brd-transparent my-0',
				],
			],
		],
	],
];