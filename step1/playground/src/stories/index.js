import Vue from "vue";
import moment from 'moment'
moment.lang('ja')

import { storiesOf } from "@storybook/vue";
import MyButton from "./Button.vue";
import MyState from "./State.vue";
import MyMonsters from "./Monsters.vue";
import MyArticleList from "./ArticleList.vue";
import MyPost from "./Post.vue";
import MyForm from "./MyForm.vue";

storiesOf("Button", module)
  .add("first button", () => ({
    components: { MyButton },
    template: '<my-button>Chick</my-button>'
  }));

storiesOf("1.3", module)
  .add("lifecycle", () => ({
    components: { MyState },
    template: '<my-state></my-state>'
  }));

storiesOf("1.4", module)
  .add("monsters", () => ({
    components: { MyMonsters },
    template: '<my-monsters></my-monsters>'
  }));

storiesOf("1.5", module)
  .add("article-list", () => ({
    components: { MyArticleList },
    template: '<my-article-list></my-article-list>'
  }));

storiesOf("1.6", module)
  .add("my-form", () => ({
    components: { MyForm },
    template: '<my-form></my-form>'
  }));
storiesOf("1.7", module)
  .add("post", () => ({
    components: { MyPost },
    template: '<my-post></my-post>'
  }));
