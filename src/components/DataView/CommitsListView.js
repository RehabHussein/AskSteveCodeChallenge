import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, ListView, ActivityIndicator } from 'react-native';
import { Constants } from 'expo';

export default class CommitsListView extends Component {
    constructor(props) {
        super(props);
        this.fetchMore = this._fetchMore.bind(this);
        this.fetchData = this._fetchData.bind(this);
        this.state = {
            errorMsg: '',
            dataSource: null,
            isLoading: true,
            isLoadingMore: false,
            _data: null,
            _page: 1,
            accessToken: this.props.navigation.getParam('accessToken')
        };
    }
componentWillReceiveProps(){
    this.setStatestate ( {
        errorMsg: '',
        dataSource: null,
        isLoading: true,
        isLoadingMore: false,
        _data: null,
        _page: 1,
});}
    _fetchData(callback) {
        const options = {
            method: 'GET',
            headers: {
                'Authorization': 'token ' + this.state.accessToken,
                'User-Agent': 'f4bf481c60d58fa1c3fb'
            }
        }
        const params = this.state._page !== ''
            ? `&page=${this.state._page}`
            : '';
      
        fetch(`https://api.github.com/repos/${this.props.navigation.getParam('rep')}/commits?per_page=15${params}`, options)
            .then(response => {

                if (response.ok) {
                    return response.json();
                }
                throw new Error('An error occured');
            })
            .then(callback)
            .catch(error => {
                this.setState({errorMsg:'An error occured, please make sure you typed the repo name correctly, if you are sure then please try again later!'});
            });
    }

    _fetchMore() {
        this.fetchData(responseJson => {
     
            const data = this.state._data.concat(responseJson);
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(data),
                isLoadingMore: false,
                _data: data,
                _page: this.state._page + 1,
            });
        });
    }

    componentDidMount() {
        this.fetchData(responseJson => {
            let ds = new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2,
            });
            const data = responseJson;
            this.setState({
                dataSource: ds.cloneWithRows(data),
                isLoading: false,
                _data: data,
                _page: this.state._page + 1,
            });
        });
    }

    render() {
        if (this.state.errorMsg!=''){
            return (
                <View style={styles.container}>
               <Text>{this.state.errorMsg}</Text>
            </View> 
            );
        }
        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large" />
                </View>
            );
        } else {
            return (
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={rowData => {
                        return (
                            <View style={styles.listItem}>
                                <View style={styles.imageWrapper}>
                                    <Image
                                        style={{ width: 70, height: 70 }}
                                        source={{
                                            uri: rowData.committer.avatar_url === '' ||
                                                rowData.committer.avatar_url === null
                                                ? 'https://via.placeholder.com/70x70.jpg'
                                                : rowData.committer.avatar_url,
                                        }}
                                    />
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.title}>
                                        {rowData.committer.login}
                                    </Text>
                                    <Text style={styles.subtitle}>
                                        {rowData.commit.message}
                                        {rowData.commit.committer.date}
                                    </Text>

                                </View>
                            </View>
                        );
                    }}
                    onEndReached={() =>
                        this.setState({ isLoadingMore: true }, () => this.fetchMore())}
                    renderFooter={() => {
                        return (
                            this.state.isLoadingMore &&
                            <View style={{ flex: 1, padding: 10 }}>
                                <ActivityIndicator size="small" />
                            </View>
                        );
                    }}
                />
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    listItem: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#d6d7da',
        padding: 6,
    },
    imageWrapper: {
        padding: 5,
    },
    title: {
        fontSize: 20,
        textAlign: 'left',
        margin: 6,
    },
    subtitle: {
        fontSize: 10,
        textAlign: 'left',
        margin: 6,
    },
});
