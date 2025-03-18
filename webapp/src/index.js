export const pluginid = 'com.mattermost.tonitter';
export const version = '1.0.0';
class ToNitterPlugin {
	async initialize(registry, store) {
		registry.registerMessageWillbePostedHook(post => {
			if (!post.mesage) {
				return;
			}
			const domain = /(https?:\/\/)?x.com\/(\S+?)/g;
			msg = post.message.replace(domain, "$1xcancel.com/$2");
			return {post: {...post, message:msg}};
		});
	}
}

window.registerPlugin(pluginid, new ToNitterPlugin());
