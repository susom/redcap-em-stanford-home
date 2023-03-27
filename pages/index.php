<?php

namespace Stanford\StanfordHome;
// test
/** @var \Stanford\StanfordHome\StanfordHome $module */
try {
    if (!$module->isSuperUser()) {
        throw new \Exception('You are not allowed in this page.');
    }
    ?>

    <?php print loadJS('Libraries/vue3.min.js') ?>
    <script src="<?php echo $module->getUrl("frontend/dist/stanford_home_vue.umd.js") ?>"></script>
    <?php print loadJS('vue/vue3-factory/dist/vue3Factory.umd.min.js') ?>

    <div id="stanford-home"></div>
    <script>

        window.addEventListener('DOMContentLoaded', function () {

            const renderUserTable = function () {
                const target = document.querySelector('#stanford-home')
                target.addEventListener('onMount', function (e) {
                    console.log(e.detail)
                })
                const app = renderVue3Component(stanford_home_vue, target)
            }

            renderUserTable()

        })
    </script>
    <?php
} catch (\Exception $e) {
    ?>
    <div class="alert alert-danger"><?php echo $e->getMessage(); ?></div>
    <?php
}
