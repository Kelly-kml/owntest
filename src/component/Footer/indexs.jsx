import { ReactComponent } from "*.svg";

/*
 * @Author: kelly
 * @Date: 2021-04-24 14:33:23
 * @Description: 实例
 * @LastEditors: kelly
 * @LastEditTime: 2021-05-10 12:17:25
 */

// Before use ComponentDidMount
class ExampleComponent extends ReactComponent.Component {
    state = {
        externalData: null,
    };

    componentWillMount() {
        this._asyncRequest = loadMyAsyncData().then(
            externalData => {
                this._asyncRequest = null;
                this.setState({ externalData });
            }
        );
    }

    componentWillUnmount() {
        if (this._asyncRequest) {
            this._asyncRequest.cancel();
        }
    }

    render() {
        if (this.state.externalData === null) {
            // Render loading state...
        } else {
            // Render real UI ...
        }
    }
}


// After use ComponentDidMount
class ExampleComponent extends ReactComponent.Component {
    state = {
        externalData: null,
    };

    componentDidMount() {
        this._asyncRequest = loadMyAsyncData().them(
            externalData => {
                this._asyncRequest = null;
                this.setState({ externalData });
            }
        );
    }

    conponentDidUnmount() {
        if (this._asyncRequest) {
            this._asyncRequest.cancel();
        }
    }

    render() {
        if (this.state.externalData === null) {
            // Render loading state ...
        } else {
            // Render real UI ...
        }
    }
}


// After
class ExampleComponent extends React.Component {
    state = {
        subscribeValue: this.props.dataSource.value,
    };

    componentDidMount() {
        this.props.dataSource.subscribe(
            this.handleSubscriptiononChange
        );

        if (
            this.state.subscribeValue !== this.props.dataSource.value
        ) {
            this.setState({
                subscribedValue: this.props.dataSource.value,
            });
        }
    }

    componentWillUnmount() {
        this.props.dataSource.unsubscribe(
            this.handleSubscriptiononChange
        );
    }

    handleSubscriptiononChange = dataSource => {
        this.setState({
            subscribedValue: dataSource.value,
        });
    };
}


class EmailInput extends Component {
    state = {
        email: this.props.defaultEmail,
        prevPropsUserID: this.props.userID
    };

    static getDerivedStateFormProps(props, state) {
        if (props.userID !== state.prevPropsUserId) {
            return {
                prevPropsUserID: props.userID,
                email: props.defaultEmail
            };
        }
        return null;
    }
}


function shallowEqual(objA: mixed, objB: mixed): boolean {
    if (objA === objB) {
        return true;
    }

    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
        return false;
    }

    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
        return false;
    }

    var bHasOwnProperty = hasOwnProperty.bind(objB);
    for (var i = 0; i < keysA.length; i++) {
        if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
            return false;
        }
    }
    return true;
}


function shallowCompare(instance, nextProps, nextProps) {
    return (!shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState));
}

var ReactComponentWillPureRenderMixin = {
    shouldComponentUpdate: function(nextProps, nextProps) {
        return shallowCompare(this, nextProps, nextState);
    }
}