/**
 * BLOCK: tabs-list
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

import {
    RichText
} from "@wordpress/block-editor";

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType('cgb/block-tabs-list', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __('tabs-list - CGB Block'), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [ __('tabs-list — CGB Block'), __('CGB Example'), __('create-guten-block') ],
	attributes: {
		header1: { type: 'string' },
		header2: { type: 'string' },
		header3: { type: 'string' },
		header4: { type: 'string' },
		header5: { type: 'string' },
		content1: { type: 'string' },
		content2: { type: 'string' },
		content3: { type: 'string' },
		content4: { type: 'string' },
		content5: { type: 'string' }
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: (props) => {
		function updateContent(event) {
			console.log('go');
			
			props.setAttributes({ header1: event.target.value });
		}

		// Creates a <p class='wp-block-cgb-block-tabs-list'></p>.
		return (
			<div className={props.className}>
				<h3>Tab List</h3>
				<p>
					Header 1
					<input type="text" value={props.attributes.header1} onChange={updateContent} />
				</p>
				<p>
					Content 1
					<RichText
						tagName="h2"
						placeholder="Content 1"
						value={props.attributes.conten1}
						onChange={onChangeTitle}
                	/>

				</p>
				
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: (props) => {
		return (
			<div>
				<div class="tabArea">
					<ul class="nav nav-tabs bar-tabs">
						<li class="nav-item">
							<a class="nav-link active" data-toggle="tab" href="#produktinfo">
								{props.attributes.header1}
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" data-toggle="tab" href="#groessenfarben">
								Größen und Farben
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" data-toggle="tab" href="#anpassung">
								Individuelle Anpassung
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" data-toggle="tab" href="#pflege">
								Pflegehinweise
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" data-toggle="tab" href="#versand">
								Versand
							</a>
						</li>
					</ul>

					<div class="tab-content">
						<div id="produktinfo" class="tab-pane fade show active">
							<div class="row">
								<div class="col-md-12">
									<p>Produktinfo</p>
								</div>
							</div>
						</div>

						<div id="groessenfarben" class="tab-pane fade">
							<div class="row">
								<div class="col-md-12">
									<p>
										Die pettiCap® gibt es aktuell für Frauen in den Größen XS, S, M und L&nbsp;in
										den Farben hautfarben und schwarz.
									</p>
								</div>

								<div class="col-md-12">
									<p>Für Männer wird sie zu einem späteren Zeitpunkt angeboten.</p>
								</div>
							</div>
						</div>

						<div id="anpassung" class="tab-pane fade">
							<div class="row">Anpassung</div>
						</div>

						<div id="pflege" class="tab-pane fade">
							<div class="row">
								<div class="col-md-12">
									<p>
										Die pettiCap® sanft per Hand mit einem milden Feinwaschmittel waschen und an der
										Luft trocknen. Nicht Waschmaschinen und Trockner geeignet.
									</p>
								</div>
							</div>
						</div>

						<div id="versand" class="tab-pane fade">
							<div class="row">
								<div class="col-md-12">
									<p>
										Wir versenden 1-2 Tage nach Zahlungseingang per DHL. Wenn Ihre Bestellung
										verschickt wurde, erhalten Sie per E-Mail eine Benachrichtigung mit der
										Sendungsnummer.
									</p>
									<p>Rücksendung nur im Originalzustand (ohne individuellen Zuschnitt) möglich.</p>
								</div>
							</div>
							<div class="row">
								<div class="col-md-12">
									<p>
									Lieferzeit: 3-4 Werktage
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});
