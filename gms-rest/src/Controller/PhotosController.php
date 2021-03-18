<?php
declare(strict_types=1);

namespace App\Controller;

/**
 * Photos Controller
 *
 * @property \App\Model\Table\PhotosTable $Photos
 * @method \App\Model\Entity\Photo[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class PhotosController extends AppController
{
    /**
     * Index method
     *
     * @return \Cake\Http\Response|null|void Renders view
     */
    public function index()
    {
        $photos = $this->Photos->find();

        $this->set(compact('photos'));
        $this->viewBuilder()->setOption('serialize', true);
    }

    /**
     * View method
     *
     * @param string|null $id Photo id.
     * @return \Cake\Http\Response|null|void Renders view
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $photo = $this->Photos->get($id, [
            'contain' => [],
        ]);

        $this->set(compact('photo'));
        $this->viewBuilder()->setOption('serialize', true);
    }

    /**
     * Add method
     *
     * @return \Cake\Http\Response|null|void Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $res = [];
        $photo = $this->Photos->newEmptyEntity();
        if ($this->request->is('post')) {
            $photo = $this->Photos->patchEntity($photo, $this->request->getData());
            if ($this->Photos->save($photo))
                $res = ["code" => 200,
                    "message" => 'The photo has been saved.'];

            else
                $res = ["code" => 400,
                    "message" => 'The photo could not be saved. Please, try again.'];
        }
        $this->set(compact('res'));
        $this->viewBuilder()->setOption('serialize', true);

    }

    /**
     * Edit method
     *
     * @param string|null $id Photo id.
     * @return \Cake\Http\Response|null|void Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $res = [];
        $photo = $this->Photos->get($id, [
            'contain' => [],
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $photo = $this->Photos->patchEntity($photo, $this->request->getData());
            if ($this->Photos->save($photo))
                $res = ["code" => 200,
                    "message" => 'The photo has been saved.'];
            else
                $res = ["code" => 400,
                    "message" => 'The photo could not be saved. Please, try again.'];
        }
        $this->set(compact('res'));
        $this->viewBuilder()->setOption('serialize', true);

    }

    /**
     * Delete method
     *
     * @param string|null $id Photo id.
     * @return \Cake\Http\Response|null|void Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $photo = $this->Photos->get($id);
        if ($this->Photos->delete($photo))
            $res = ["code" => 200,
                "message" => 'The photo has been deleted.'];
        else
            $res = ["code" => 400,
                "message" => 'The photo could not be deleted. Please, try again.'];


        $this->set($res);
        $this->viewBuilder()->setOption('serialize', true);

    }
}
