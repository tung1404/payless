var AppHeader = React.createClass({
    getInitialState: function () {
        return {};
    },

    componentDidMount: function () {
        animateHeader();
    },

    render: function () {
        return (
            <header className="header header--light">
                <div className="header-fixed">
                    <AppHeader.Line/>

                    <div className="fixed-top header-down">
                        <AppHeader.Container/>

                        <div className="devider-color"></div>
                    </div>
                </div>
            </header>
        );
    }
});

AppHeader.Line = React.createClass({
    render: function () {
        return (
            <div className="header-line waypoint" data-animate-down="header-up" data-animate-up="header-down">
                <div className="container">
                    <address className="contact-info pull-left hidden-lower">
						<span className="contact-info__item">
							<i className="fa fa-location-arrow"></i>
                            101 West Street, New York, NY 12345
						</span>
						<span className="contact-info__item">
							<i className="fa fa-mobile"></i>
                            +1 - 888 - 555 - 5555
						</span>
						<span className="contact-info__item">
							<i className="fa fa-envelope"></i>
                            info@allec.com
						</span>
                    </address>


                    <form className="search pull-right" id="search-form" name="search-form" method="get" action="#">
                        <input className="search__field" name="search-request" type="search" placeholder="search"
                               value=""/>
                        <button className="search__btn" type="submit">
                            <i className="fa fa-search"></i>
                        </button>
                    </form>
                </div>
            </div>
        );
    }
});
AppHeader.Container = React.createClass({
    render: function () {
        return (
            <div className="container">
                <AppHeader.Logo/>

                <AppHeader.Menu/>
            </div>
        )
    }
});

AppHeader.Menu = React.createClass({
    getInitialState: function () {
        return {};
    },

    componentDidMount: function () {

    },

    render: function () {
        return (
            <nav className="z-nav">
                <a href="#" className="z-nav__toggle">
                    <span className="menu-icon"></span>
                    <span className="menu-text">navigation</span>

                    <div className="menu-head"></div>
                </a>

                <div className="z-nav-inner">
                    <ul className="z-nav__list">
                        <li className="z-nav__item">
                            <a className="z-nav__link z-nav__link--simple" href="#">Home</a>
                        </li>

                        <li className="z-nav__item">
                            <a className="z-nav__link z-nav__link--simple" href="#about">About</a>
                        </li>

                        <li className="z-nav__item">
                            <a className="z-nav__link z-nav__link--simple" href="#team">Team</a>
                        </li>

                        <li className="z-nav__item">
                            <a className="z-nav__link z-nav__link--simple" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>

            </nav>
        );
    }
});


AppHeader.Logo = React.createClass({
    render: function () {
        return (
            <a className="logo" href="index.html">
                <h1 className="logo__text">Pay<span className="highlight">Less</span><br/>
                    <span className="logo__slogan">buy more</span>
                </h1>
            </a>
        );
    }
});


var AppBreadcrumb = React.createClass({
    getInitialState: function () {
        return {};
    },

    componentDidMount: function () {

    },

    render: function () {

        var links = [];


        return (
            <section className="page-indecator">
                <div className="container">
                    <h2 className="heading">Headers</h2>

                    <ol className="breadcrumb">
                        <li><a href="index.html">Home</a></li>
                        <li className="active">Headers</li>
                    </ol>

                    <div className="devider devider--bottom-sm"></div>
                </div>
            </section>
        );
    }
});

var AppSidebar = React.createClass({
    getInitialState: function () {
        return {};
    },

    componentDidMount: function () {

    },

    render: function () {
        return (
            <div></div>
        );
    }
});


var AppFooter = React.createClass({
    getInitialState: function () {
        return {};
    },

    componentDidMount: function () {

    },

    render: function () {
        return (
            <section className="page-indecator">
                <div className="container">
                    <h2 className="heading">Headers</h2>

                    <ol className="breadcrumb">
                        <li><a href="index.html">Home</a></li>
                        <li className="active">Headers</li>
                    </ol>

                    <div className="devider devider--bottom-sm"></div>
                </div>
            </section>
        );
    }
});
