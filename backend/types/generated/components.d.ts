import type { Schema, Attribute } from '@strapi/strapi';

export interface PageHomePage extends Schema.Component {
  collectionName: 'components_page_home_pages';
  info: {
    displayName: 'HomePage';
    icon: 'house';
    description: '';
  };
  attributes: {
    banner_description: Attribute.Text & Attribute.Required & Attribute.Unique;
    banner_graphics: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    > &
      Attribute.Required;
    slogan: Attribute.Text & Attribute.Required & Attribute.Unique;
    small_slogan: Attribute.Text & Attribute.Required & Attribute.Unique;
    banner_title: Attribute.Blocks & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'page.home-page': PageHomePage;
    }
  }
}
