import { connect } from 'react-redux';
import RssFeed from '../components/rssFeed/RssFeed';
import { rssFeedHandleSearch } from '../actions/RssFeedAction';

function mapStateToProps(state) {
    return {
        ...state.rssFeed
    };
}

function mapDispatchToProps(dispatch) {
    return {
        rssFeedHandleSearch: (rssSearchQuery) => dispatch(rssFeedHandleSearch(rssSearchQuery)),
    };
}


export default connect(
    mapStateToProps, mapDispatchToProps
)(RssFeed);