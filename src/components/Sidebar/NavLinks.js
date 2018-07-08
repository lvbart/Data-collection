// sidebar nav links
export default {
	category1: [
		{
			"menu_title": "sidebar.dashboard",
			"menu_icon": "ti-dashboard",
			"child_routes": [
				{
					"menu_title": "sidebar.ecommerce",
					"path": "/app/dashboard/ecommerce",
				},
				{
					"path": "/app/dashboard/saas",
					"menu_title": "sidebar.saas"
				},
			]
		},
		{
			"menu_title": "sidebar.horizontalMenu",
			"menu_icon": "ti-notepad",
			"path": "/horizontal",
			"child_routes": null
		},
		{
			"menu_title": "sidebar.ecommerce",
			"menu_icon": "ti-shopping-cart",
			"child_routes": [
				{
					"path": "/app/ecommerce/shop",
					"menu_title": "sidebar.shop"
				},
				{
					"path": "/app/ecommerce/cart",
					"menu_title": "sidebar.cart"
				},
				{
					"path": "/app/ecommerce/checkout",
					"menu_title": "sidebar.checkout"
				},
				{
					"path": "/app/ecommerce/shop-list",
					"menu_title": "sidebar.shopList"
				},
				{
					"path": "/app/ecommerce/shop-grid",
					"menu_title": "sidebar.shopGrid"
				},
				{
					"path": "/app/ecommerce/invoice",
					"menu_title": "sidebar.invoice"
				}
			]
		},
		{
			"menu_title": "sidebar.widgets",
			"menu_icon": "ti-widget",
			"path": "/app/widgets",
			"child_routes": [
				{
					"path": "/app/widgets/charts",
					"menu_title": "sidebar.charts"
				},
				{
					"path": "/app/widgets/promo",
					"menu_title": "sidebar.promo"
				},
				{
					"path": "/app/widgets/general",
					"menu_title": "sidebar.general"
				},
				{
					"path": "/app/widgets/user",
					"menu_title": "sidebar.user"
				},


			]
		},
		{
			"menu_title": "sidebar.pages",
			"menu_icon": "ti-layers",
			"child_routes": [
				{
					"path": "/app/pages/gallery",
					"menu_title": "sidebar.gallery"
				},
				{
					"path": "/app/pages/pricing",
					"menu_title": "sidebar.pricing"
				},
				{
					"path": "/app/pages/blank",
					"menu_title": "sidebar.blank"
				},
				{
					"path": "/terms-condition",
					"menu_title": "sidebar.terms&Conditions"
				},
				{
					"path": "/app/pages/feedback",
					"menu_title": "sidebar.feedback"
				},
				{
					"path": "/app/pages/report",
					"menu_title": "sidebar.report"
				},
				{
					"path": "/app/pages/faq",
					"menu_title": "sidebar.faq(s)"
				}
			]
		},
		{
			"menu_title": "sidebar.session",
			"menu_icon": "ti-timer",
			"child_routes": [
				{
					"path": "/session/login",
					"menu_title": "sidebar.login"
				},
				{
					"path": "/session/register",
					"menu_title": "sidebar.register"
				},
				{
					"path": "/session/lock-screen",
					"menu_title": "sidebar.lockScreen"
				},
				{
					"path": "/session/forgot-password",
					"menu_title": "sidebar.forgotPassword"
				},
				{
					"path": "/session/404",
					"menu_title": "sidebar.404"
				},
				{
					"path": "/session/500",
					"menu_title": "sidebar.500"
				}
			]
		}
	],
	category2: [
		{
			"menu_title": "sidebar.inbox",
			"menu_icon": "ti-archive",
			"path": "/app/mail",
			"child_routes": null
		},
		{
			"menu_title": "sidebar.chat",
			"menu_icon": "ti-comment",
			"path": "/app/chat",
			"child_routes": null
		},
		{
			"menu_title": "sidebar.toDo",
			"menu_icon": "ti-comment-alt",
			"path": "/app/todo",
			"child_routes": null
		}
	],
	category3: [
		{
			"menu_title": "sidebar.uiComponents",
			"menu_icon": "ti-ruler-alt-2",
			"child_routes": [
				{
					"path": "/app/ui-components/alerts",
					"menu_title": "sidebar.alerts"
				},
				{
					"path": "/app/ui-components/app-bar",
					"menu_title": "sidebar.appBar"
				},
				{
					"path": "/app/ui-components/avatars",
					"menu_title": "sidebar.avatars"
				},
				{
					"path": "/app/ui-components/buttons",
					"menu_title": "sidebar.buttons"
				},
				{
					"path": "/app/ui-components/bottom-navigations",
					"menu_title": "sidebar.bottomNavigations"
				},
				{
					"path": "/app/ui-components/badges",
					"menu_title": "sidebar.badges"
				},
				{
					"path": "/app/ui-components/cards",
					"menu_title": "sidebar.cards"
				},
				{
					"path": "/app/ui-components/cards-masonary",
					"menu_title": "sidebar.cardsMasonry"
				},
				{
					"path": "/app/ui-components/chip",
					"menu_title": "sidebar.chip"
				},
				{
					"path": "/app/ui-components/dialog",
					"menu_title": "sidebar.dialog"
				},
				{
					"path": "/app/ui-components/dividers",
					"menu_title": "sidebar.dividers"
				},
				{
					"path": "/app/ui-components/drawers",
					"menu_title": "sidebar.drawers"
				},
				{
					"path": "/app/ui-components/expansion-panel",
					"menu_title": "sidebar.expansionPanel"
				},
				{
					"path": "/app/ui-components/grid-list",
					"menu_title": "sidebar.gridList"
				},
				{
					"path": "/app/ui-components/list",
					"menu_title": "sidebar.list"
				},
				{
					"path": "/app/ui-components/menu",
					"menu_title": "sidebar.menu"
				},
				{
					"path": "/app/ui-components/popover",
					"menu_title": "sidebar.popoverAndToolTip"
				},
				{
					"path": "/app/ui-components/progress",
					"menu_title": "sidebar.progress"
				},
				{
					"path": "/app/ui-components/snackbar",
					"menu_title": "sidebar.snackbar"
				},
				{
					"path": "/app/ui-components/selection-controls",
					"menu_title": "sidebar.selectionControls"
				}
			]
		},
		{
			"menu_title": "sidebar.advancedComponent",
			"menu_icon": "ti-ruler-pencil",
			"child_routes": [
				{
					"path": "/app/advanced-component/dateTime-picker",
					"menu_title": "sidebar.dateAndTimePicker"
				},
				{
					"path": "/app/advanced-component/tabs",
					"menu_title": "sidebar.tabs"
				},
				{
					"path": "/app/advanced-component/stepper",
					"menu_title": "sidebar.stepper"
				},
				{
					"path": "/app/advanced-component/notification",
					"menu_title": "sidebar.notification"
				},
				{
					"path": "/app/advanced-component/sweet-alert",
					"menu_title": "sidebar.sweetAlert"
				},
				{
					"path": "/app/advanced-component/auto-complete",
					"menu_title": "sidebar.autoComplete"
				}
			]
		},
		{
			"menu_title": "sidebar.aboutUs",
			"menu_icon": "ti-info-alt",
			"path": "/app/about-us",
			"child_routes": null
		}
	],
	category4: [
		{
			"menu_title": "sidebar.forms",
			"menu_icon": "ti-menu-alt",
			"child_routes": [
				{
					"path": "/app/forms/form-elements",
					"menu_title": "sidebar.formElements"
				},
				{
					"path": "/app/forms/text-field",
					"menu_title": "sidebar.textField"
				},
				{
					"path": "/app/forms/select-list",
					"menu_title": "sidebar.selectList"
				}
			]
		},
		{
			"menu_title": "sidebar.charts",
			"menu_icon": "ti-pie-chart",
			"child_routes": [
				{
					"path": "/app/charts/re-charts",
					"menu_title": "sidebar.reCharts"
				},
				{
					"path": "/app/charts/react-chartjs2",
					"menu_title": "sidebar.reactChartjs2"
				}
			]
		},
		{
			"menu_title": "sidebar.icons",
			"menu_icon": "ti-star",
			"child_routes": [
				{
					"path": "/app/icons/themify-icons",
					"menu_title": "sidebar.themifyIcons"
				},
				{
					"path": "/app/icons/simple-lineIcons",
					"menu_title": "sidebar.simpleLineIcons"
				},
				{
					"path": "/app/icons/font-awesome",
					"menu_title": "sidebar.fontAwesome"
				},
				{
					"path": "/app/icons/material-icons",
					"menu_title": "sidebar.materialIcons"
				}
			]
		},
		{
			"menu_title": "sidebar.tables",
			"menu_icon": "ti-layout",
			"child_routes": [
				{
					"path": "/app/tables/basic",
					"menu_title": "sidebar.basic"
				},
				{
					"path": "/app/tables/data-table",
					"menu_title": "sidebar.dataTable"
				},
				{
					"path": "/app/tables/responsive",
					"menu_title": "sidebar.responsive"
				}
			]
		}
	],
	category5: [
		{
			"menu_title": "sidebar.maps",
			"menu_icon": "ti-map-alt",
			"child_routes": [
				{
					"path": "/app/maps/google-maps",
					"menu_title": "sidebar.googleMaps"
				},
				{
					"path": "/app/maps/leaflet-maps",
					"menu_title": "sidebar.leafletMaps"
				}
			]
		},
		{
			"menu_title": "sidebar.users",
			"menu_icon": "ti-user",
			"child_routes": [
				{
					"path": "/app/users/user-profile-1",
					"menu_title": "sidebar.userProfile1"
				},
				{
					"path": "/app/users/user-profile",
					"menu_title": "sidebar.userProfile2"
				},
				{
					"path": "/app/users/user-management",
					"menu_title": "sidebar.userManagement"
				},
				{
					"path": "/app/users/user-list",
					"menu_title": "sidebar.userList"
				}
			]
		},
		{
			"menu_title": "sidebar.calendar",
			"menu_icon": "ti-calendar",
			"child_routes": [
				{
					"path": "/app/calendar/basic",
					"menu_title": "components.basic"
				},
				{
					"path": "/app/calendar/cultures",
					"menu_title": "sidebar.cultures"
				},
				{
					"path": "/app/calendar/dnd",
					"menu_title": "sidebar.dnd"
				},
				{
					"path": "/app/calendar/selectable",
					"menu_title": "sidebar.selectable"
				},
				{
					"path": "/app/calendar/custom-rendering",
					"menu_title": "sidebar.customRendering"
				}
			]
		},
		{
			"menu_title": "sidebar.editor",
			"menu_icon": "ti-pencil-alt",
			"child_routes": [
				{
					"path": "/app/editor/wysiwyg-editor",
					"menu_title": "sidebar.wysiwygEditor"
				},
				{
					"path": "/app/editor/quill-editor",
					"menu_title": "sidebar.quillEditor"
				}
			]
		},
		{
			"menu_title": "sidebar.dragAndDrop",
			"menu_icon": "ti-mouse-alt",
			"child_routes": [
				{
					"path": "/app/drag-andDrop/react-dragula",
					"menu_title": "sidebar.reactDragula"
				},
				{
					"path": "/app/drag-andDrop/react-dnd",
					"menu_title": "sidebar.reactDnd"
				}
			]
		},
		{
			"menu_title": "sidebar.multiLevel",
			"menu_icon": "ti-layout-cta-right",
			"child_routes": [
				{
					"menu_title": "sidebar.level1",
					"child_routes": [
						{
							"path": "/app/level2",
							"menu_title": "sidebar.level2"
						}
					]
				}
			]
		}
	]
}
