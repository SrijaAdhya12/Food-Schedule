import { yellowrice,suji,ruti,dosa,samosa,pakora,rice,rutibhindi,biriyani,chickencurry,wednesdaylunch,thursdaybreakfast,tuesdaydinner,thursdaydinner,sundaybreak,fridaybreak,fridaydinner, wedsnack, mondaysnack, tuesdaysnack, wedbreak, thursdaysnack } from "../assets";

export const foodData = {
	Monday: {
		breakfast: {
			items: ['Suji', 'Tea', 'Chutni'],
			image: suji
		},
		lunch: {
			items: ['Grilled chicken salad', 'Quinoa bowl', 'Vegetable soup'],
			image: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2823%2Ftrend20200504161425.jpg'
		},
		snack: {
			items: ['Sandwitch', 'Green Chutney'],
			image: mondaysnack
		},
		dinner: {
			items: ['Ruti', 'Sabji', 'Chaana'],
			image: rutibhindi
		}
	},
	Tuesday: {
		breakfast: {
			items: ['Yellow rice', 'Sambar', 'Tea'],
			image: yellowrice
		},
		lunch: {
			items: ['Turkey sandwich', 'Mixed green salad', 'Hummus with carrots'],
			image: 'https://vismaifood.com/storage/app/uploads/public/159/862/142/thumb__700_0_0_0_auto.jpg'
		},
		snack: {
			items: ['Samosa', 'Green Chutney'],
			image: tuesdaysnack
		},
		dinner: {
			items: ['Ruti', 'Daal'],
			image: tuesdaydinner
		}
	},
	Wednesday: {
		breakfast: {
			items: ['Idli', 'Sambar'],
			image: wedbreak
		},
		lunch: {
			items: ['Rice', 'Daal', 'Channa'],
			image: wednesdaylunch
		},
		snack: {
			items: ['Chicken Kebab'],
			image: wedsnack
		},
		dinner: {
			items: ['Ruti', 'Egg Rice', 'Egg'],
			image: ruti
		}
	},
	Thursday: {
		breakfast: {
			items: ['Pancakes', 'Maple syrup', 'Banana'],
			image: thursdaybreakfast
		},
		lunch: {
			items: ['Vegetarian chili', 'Cornbread', 'Mixed berries'],
			image: 'https://static.toiimg.com/thumb/83595923.cms?width=1200&height=900'
		},
		snack: {
			items: ['Samosa', 'Green Chutney'],
			image: thursdaysnack
		},
		dinner: {
			items: ['Roast chicken', 'Sweet potato', 'Green beans'],
			image: thursdaydinner
		}
	},
	Friday: {
		breakfast: {
			items: ['Yellow Rice', 'Sambar', 'Tea'],
			image: fridaybreak
		},
		lunch: {
			items: ['Caprese sandwich', 'Cherry tomatoes', 'Balsamic glaze'],
			image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2020/01/mix-veg-paratha.jpg'
		},
		snack: {
			items: ['Kebab'],
			image: wedsnack
		},
		dinner: {
			items: ['Grilled shrimp skewers', 'Couscous', 'Grilled zucchini'],
			image: fridaydinner
		}
	},
	Saturday: {
		breakfast: {
			items: ['dosa', 'Sambar'],
			image: dosa
		},
		lunch: {
			items: ['Margherita pizza', 'Caesar salad', 'Iced tea'],
			image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixid=M3wxMzcxOTN8MHwxfHNlYXJjaHwyfHxmcmllZCUyMHJpY2V8ZW58MHx8fHwxNzEzOTMwMTY4fDA&ixlib=rb-4.0.3&fm=jpg&w=5202&h=4162&fit=max'
		},
		snack: {
			items: ['Samosa', 'Green Chutney'],
			image: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2823%2Ftrend20200504161425.jpg'
		},
		dinner: {
			items: ['Ruti', 'Curry'],
			image: 'https://foodgypsy.ca/wp-content/uploads/2013/07/Trini_Roti_Recipe_Food_Gypsy_2013-1.jpg'
		}
	},
	Sunday: {
		breakfast: {
			items: ['Eggs Benedict', 'Hollandaise sauce', 'Hash browns'],
			image: sundaybreak
		},
		lunch: {
			items: ['Grilled cheese sandwich', 'Tomato soup', 'Pickle'],
			image: biriyani
		},
		snack: {
			items: ['Samosa', 'Green Chutney'],
			image: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2823%2Ftrend20200504161425.jpg'
		},
		dinner: {
			items: ['Rice', 'Chicken Curry', 'Lunch left over'],
			image: chickencurry
		}
	}
}
