import { currentTheme, type CurrentTheme } from '@/stores';
import constants, { type DomainConstants } from './constants';
export enum Theme {
	Renovation,
	Homecare,
	Blog,
	Articles,
	NotSet
}

export const updateCurrentTheme = (newtheme: Theme, heroText: string) => {
	let currentDomain: DomainConstants;
	let otherDomain: DomainConstants;

	switch (newtheme) {
		case Theme.Renovation:
			currentDomain = constants.renovation;
			otherDomain = constants.homecare;
			break;

		case Theme.Homecare:
			currentDomain = constants.homecare;
			otherDomain = constants.renovation;
			break;

		case Theme.Blog:
			break;

		case Theme.Articles:
			break;

		case Theme.NotSet:
			break;

		default:
			currentDomain = constants.renovation;
			otherDomain = constants.homecare;
			break;
	}

	currentTheme.update(
		(t) =>
			(t = {
				currentDomain: currentDomain,
				otherDomain: otherDomain,
				heroText
			})
	);
};
