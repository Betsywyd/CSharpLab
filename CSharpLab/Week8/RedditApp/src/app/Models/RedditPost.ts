// To parse this data:
//
//   import { Convert, RedditPost } from "./file";
//
//   const redditPost = Convert.toRedditPost(json);

export interface RedditPost {
    kind: string;
    data: RedditPostData;
}

export interface RedditPostData {
    after:      string;
    dist:       number;
    modhash:    string;
    geo_filter: null;
    children:   Child[];
    before:     null;
}

export interface Child {
    kind: Kind;
    data: ChildData;
}

export interface ChildData {
    approved_at_utc:               null;
    subreddit:                     Subreddit;
    selftext:                      string;
    author_fullname:               string;
    saved:                         boolean;
    mod_reason_title:              null;
    gilded:                        number;
    clicked:                       boolean;
    title:                         string;
    link_flair_richtext:           any[];
    subreddit_name_prefixed:       SubredditNamePrefixed;
    hidden:                        boolean;
    pwls:                          number;
    link_flair_css_class:          null | string;
    downs:                         number;
    thumbnail_height:              number;
    top_awarded_type:              null;
    hide_score:                    boolean;
    name:                          string;
    quarantine:                    boolean;
    link_flair_text_color:         FlairTextColor;
    upvote_ratio:                  number;
    author_flair_background_color: null | string;
    subreddit_type:                SubredditType;
    ups:                           number;
    total_awards_received:         number;
    media_embed:                   Gildings;
    thumbnail_width:               number;
    author_flair_template_id:      null;
    is_original_content:           boolean;
    user_reports:                  any[];
    secure_media:                  Media | null;
    is_reddit_media_domain:        boolean;
    is_meta:                       boolean;
    category:                      null;
    secure_media_embed:            Gildings;
    link_flair_text:               null;
    can_mod_post:                  boolean;
    score:                         number;
    approved_by:                   null;
    is_created_from_ads_ui:        boolean;
    author_premium:                boolean;
    thumbnail:                     string;
    edited:                        boolean;
    author_flair_css_class:        null | string;
    author_flair_richtext:         any[];
    gildings:                      Gildings;
    post_hint?:                    PostHint;
    content_categories:            null;
    is_self:                       boolean;
    mod_note:                      null;
    created:                       number;
    link_flair_type:               FlairType;
    wls:                           number;
    removed_by_category:           null;
    banned_by:                     null;
    author_flair_type:             FlairType;
    domain:                        Domain;
    allow_live_comments:           boolean;
    selftext_html:                 null | string;
    likes:                         null;
    suggested_sort:                null;
    banned_at_utc:                 null;
    url_overridden_by_dest:        string;
    view_count:                    null;
    archived:                      boolean;
    no_follow:                     boolean;
    is_crosspostable:              boolean;
    pinned:                        boolean;
    over_18:                       boolean;
    preview?:                      Preview;
    all_awardings:                 AllAwarding[];
    awarders:                      any[];
    media_only:                    boolean;
    can_gild:                      boolean;
    spoiler:                       boolean;
    locked:                        boolean;
    author_flair_text:             null;
    treatment_tags:                any[];
    visited:                       boolean;
    removed_by:                    null;
    num_reports:                   null;
    distinguished:                 null;
    subreddit_id:                  Subredditid;
    author_is_blocked:             boolean;
    mod_reason_by:                 null;
    removal_reason:                null;
    link_flair_background_color:   string;
    id:                            string;
    is_robot_indexable:            boolean;
    report_reasons:                null;
    author:                        string;
    discussion_type:               null;
    num_comments:                  number;
    send_replies:                  boolean;
    whitelist_status:              WhitelistStatus;
    contest_mode:                  boolean;
    mod_reports:                   any[];
    author_patreon_flair:          boolean;
    author_flair_text_color:       FlairTextColor | null;
    permalink:                     string;
    parent_whitelist_status:       WhitelistStatus;
    stickied:                      boolean;
    url:                           string;
    subreddit_subscribers:         number;
    created_utc:                   number;
    num_crossposts:                number;
    media:                         Media | null;
    is_video:                      boolean;
    is_gallery?:                   boolean;
    media_metadata?:               { [key: string]: MediaMetadatum };
    gallery_data?:                 GalleryData;
}

export interface AllAwarding {
    giver_coin_reward:                    null;
    subreddit_id:                         null;
    is_new:                               boolean;
    days_of_drip_extension:               null;
    coin_price:                           number;
    id:                                   string;
    penny_donate:                         null;
    award_sub_type:                       AwardSubType;
    coin_reward:                          number;
    icon_url:                             string;
    days_of_premium:                      null;
    tiers_by_required_awardings:          null;
    resized_icons:                        ResizedIcon[];
    icon_width:                           number;
    static_icon_width:                    number;
    start_date:                           null;
    is_enabled:                           boolean;
    awardings_required_to_grant_benefits: null;
    description:                          string;
    end_date:                             null;
    sticky_duration_seconds:              null;
    subreddit_coin_reward:                number;
    count:                                number;
    static_icon_height:                   number;
    name:                                 string;
    resized_static_icons:                 ResizedIcon[];
    icon_format:                          null | string;
    icon_height:                          number;
    penny_price:                          number | null;
    award_type:                           AwardType;
    static_icon_url:                      string;
}

export enum AwardSubType {
    Global = "GLOBAL",
    Premium = "PREMIUM",
}

export enum AwardType {
    Global = "global",
}

export interface ResizedIcon {
    url:    string;
    width:  number;
    height: number;
}

export enum FlairTextColor {
    Dark = "dark",
}

export enum FlairType {
    Text = "text",
}

export enum Domain {
    IImgurcom = "i.imgur.com",
    IReddIt = "i.redd.it",
    Redditcom = "reddit.com",
    VReddIt = "v.redd.it",
}

export interface GalleryData {
    items: Item[];
}

export interface Item {
    media_id: string;
    id:       number;
    caption?: string;
}

export interface Gildings {
}

export interface Media {
    reddit_video: RedditVideo;
}

export interface RedditVideo {
    bitrate_kbps:       number;
    fallback_url:       string;
    has_audio?:         boolean;
    height:             number;
    width:              number;
    scrubber_media_url: string;
    dash_url:           string;
    duration:           number;
    hls_url:            string;
    is_gif:             boolean;
    transcoding_status: TranscodingStatus;
}

export enum TranscodingStatus {
    Completed = "completed",
}

export interface MediaMetadatum {
    status: string;
    e:      string;
    m:      string;
    p:      S[];
    s:      S;
    id:     string;
}

export interface S {
    y: number;
    x: number;
    u: string;
}

export enum WhitelistStatus {
    AllAds = "all_ads",
}

export enum PostHint {
    HostedVideo = "hosted:video",
    Image = "image",
    Link = "link",
}

export interface Preview {
    images:                Image[];
    enabled:               boolean;
    reddit_video_preview?: RedditVideo;
}

export interface Image {
    source:      ResizedIcon;
    resolutions: ResizedIcon[];
    variants:    Variants;
    id:          string;
}

export interface Variants {
    gif?: Gif;
    mp4?: Gif;
}

export interface Gif {
    source:      ResizedIcon;
    resolutions: ResizedIcon[];
}

export enum Subreddit {
    Aww = "aww",
}

export enum Subredditid {
    T52Qh1O = "t5_2qh1o",
}

export enum SubredditNamePrefixed {
    RAww = "r/aww",
}

export enum SubredditType {
    Public = "public",
}

export enum Kind {
    T3 = "t3",
}

// Converts JSON strings to/from your types
export class Convert {
    public static toRedditPost(json: string): RedditPost {
        return JSON.parse(json);
    }

    public static redditPostToJson(value: RedditPost): string {
        return JSON.stringify(value);
    }

    public static toRedditPostData(json: string): RedditPostData {
        return JSON.parse(json);
    }

    public static redditPostDataToJson(value: RedditPostData): string {
        return JSON.stringify(value);
    }

    public static toChild(json: string): Child {
        return JSON.parse(json);
    }

    public static childToJson(value: Child): string {
        return JSON.stringify(value);
    }

    public static toChildData(json: string): ChildData {
        return JSON.parse(json);
    }

    public static childDataToJson(value: ChildData): string {
        return JSON.stringify(value);
    }

    public static toAllAwarding(json: string): AllAwarding {
        return JSON.parse(json);
    }

    public static allAwardingToJson(value: AllAwarding): string {
        return JSON.stringify(value);
    }

    public static toResizedIcon(json: string): ResizedIcon {
        return JSON.parse(json);
    }

    public static resizedIconToJson(value: ResizedIcon): string {
        return JSON.stringify(value);
    }

    public static toGalleryData(json: string): GalleryData {
        return JSON.parse(json);
    }

    public static galleryDataToJson(value: GalleryData): string {
        return JSON.stringify(value);
    }

    public static toItem(json: string): Item {
        return JSON.parse(json);
    }

    public static itemToJson(value: Item): string {
        return JSON.stringify(value);
    }

    public static toGildings(json: string): Gildings {
        return JSON.parse(json);
    }

    public static gildingsToJson(value: Gildings): string {
        return JSON.stringify(value);
    }

    public static toMedia(json: string): Media {
        return JSON.parse(json);
    }

    public static mediaToJson(value: Media): string {
        return JSON.stringify(value);
    }

    public static toRedditVideo(json: string): RedditVideo {
        return JSON.parse(json);
    }

    public static redditVideoToJson(value: RedditVideo): string {
        return JSON.stringify(value);
    }

    public static toMediaMetadatum(json: string): MediaMetadatum {
        return JSON.parse(json);
    }

    public static mediaMetadatumToJson(value: MediaMetadatum): string {
        return JSON.stringify(value);
    }

    public static toS(json: string): S {
        return JSON.parse(json);
    }

    public static sToJson(value: S): string {
        return JSON.stringify(value);
    }

    public static toPreview(json: string): Preview {
        return JSON.parse(json);
    }

    public static previewToJson(value: Preview): string {
        return JSON.stringify(value);
    }

    public static toImage(json: string): Image {
        return JSON.parse(json);
    }

    public static imageToJson(value: Image): string {
        return JSON.stringify(value);
    }

    public static toVariants(json: string): Variants {
        return JSON.parse(json);
    }

    public static variantsToJson(value: Variants): string {
        return JSON.stringify(value);
    }

    public static toGif(json: string): Gif {
        return JSON.parse(json);
    }

    public static gifToJson(value: Gif): string {
        return JSON.stringify(value);
    }
}
