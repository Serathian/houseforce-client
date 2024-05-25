export type DomainConstants = {
	dataTheme: string;
	domainName: string;
	homeUrl: string;
};
const fallbackDomain: DomainConstants = {
	dataTheme: 'not-set',
	domainName: 'not-set',
	homeUrl: '/'
};

const renovation: DomainConstants = {
	dataTheme: 'renovation',
	domainName: 'Renovation',
	homeUrl: '/renovation'
};

const homecare: DomainConstants = {
	dataTheme: 'homecare',
	domainName: 'Homecare',
	homeUrl: '/homecare'
};

export default {
	fallbackDomain,
	renovation,
	homecare
};
