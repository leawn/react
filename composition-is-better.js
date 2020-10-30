import React from 'react';
import ReactDOM from 'react-dom';

<Page user={user} avatarSize={avatarSize} />
// which renders ...
<PageLayout user={user} avatarSize={avatarSize} />
// which renders ...
<NavigationBar user={user} avatarSize={avatarSize}/>
// which renders ...
<Link href={user.permalink}>
    <Avatar user={user} avatarSize={avatarSize} />
</Link>

//BUT MUCH BETTER IS

function Page(props) {
    const user = props.user;
    const userLink = (
        <Link href={user.permalink}>
            <Avatar user={user} avatarSize={avatarSize} />
        </Link>
    );
    return <PageLayout userLink={userLink} />;
}

<Page user={user} avatarSize={avatarSize} />
// which renders ...
<PageLayout userLink={props.userLink} />
// which renders ...
<NavigationBar userLink={props.userLink} />
// which renders ...
{props.userLink}


ReactDOM.render(
    <Page />,
    document.getElementById('root')
);